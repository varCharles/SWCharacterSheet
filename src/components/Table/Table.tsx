import { useStore } from "@/store/SWD6store";
import { SWD6DiceRoller } from "../SWD6DiceRoller";

export const Table = ({ tableData }) => {
  if (tableData.length < 1) return;
  const tableHeaders = Object.keys(tableData[0]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Equipment</h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="w-full divide-y divide-gray-700">
              <TableHeader data={tableHeaders} />
              <tbody className="divide-y divide-gray-800">
                {tableData.map((rowData) => (
                  <SWCharacterSheetRow key={rowData.name} row={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableHeader = ({ data }) => {
  return (
    <thead>
      <tr>
        {data.map((header) => (
          <th
            key={header}
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white capitalize sm:pl-0"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const formatLookupValue = (id, skills, modifiers) => {
  // const dice = baseValue + value;
  const stunned = modifiers.stunned ? 1 : 0;
  const wounded = modifiers.wounded ? 1 : 0;
  const wounded2x = modifiers.wounded2x ? 1 : 0;
  const { baseValue, value, name } = skills[id];
  const diceNum = value ? baseValue + value : baseValue;
  const penalty = stunned + wounded + wounded2x;
  const total = diceNum - penalty;
  const dice = total < 1 ? 0 : total;

  return (
    <SWD6DiceRoller dice={dice} stat={name}>
      {dice}D
    </SWD6DiceRoller>
  );
};

const formatDamageValue = (value, name) => {
  return (
    <SWD6DiceRoller dice={value} stat={name}>
      {value}D
    </SWD6DiceRoller>
  );
};

const formatValue = (column, row, skills, modifiers) => {
  switch (column) {
    case "lookup":
      return formatLookupValue(row[column], skills, modifiers);
    case "damage":
      return formatDamageValue(row[column], row.name);
    default:
      return row[column];
  }
};

export const SWCharacterSheetRow = ({ row }) => {
  const skills = useStore((state) => state.skillsMap);
  const modifiers = useStore((state) => state.modifiers);

  return (
    <tr className="even:bg-gray-800">
      {Object.keys(row).map((column) => {
        const value = formatValue(column, row, skills, modifiers);
        return (
          <td
            key={row[column]}
            scope="col"
            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
          >
            {value}
          </td>
        );
      })}
    </tr>
  );
};
