import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leaderboard = [
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
  {
    username: "0x4193...abcd",
    envelope_bought: "143",
  },
];

export function Leaderboard() {
  return (
    <Table className="overflow-auto">
      <TableHeader className="p-1">
        <TableRow className="text-white-50 ty-descriptions">
          <TableHead>#</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Envelopes Bought</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboard.map((data, index) => (
          <TableRow key={index} className="group cursor-pointer">
            <TableCell className="font-medium group-hover:text-yellow-100 ease-out duration-300">
              {index + 1}
            </TableCell>
            <TableCell className=" group-hover:text-yellow-100 ease-out duration-300">
              {data.username}
            </TableCell>
            <TableCell className="text-right group-hover:text-yellow-100 ease-out duration-300">
              {data.envelope_bought}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="p-1 rounded bg-white-4">
        <TableRow className="group cursor-pointer">
          <TableCell className="group-hover:text-yellow-100 ease-out duration-300">
            256
          </TableCell>
          <TableCell className="flex items-center gap-2 group-hover:text-yellow-100 ease-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
            >
              <circle cx="4" cy="4.5" r="4" fill="#F6D358" />
            </svg>
            0x4193...abcd
            <span className="text-white-50 group-hover:text-yellow-50 ease-out duration-300">
              (You)
            </span>
          </TableCell>
          <TableCell className="text-right group-hover:text-yellow-100 ease-out duration-300">
            143
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
