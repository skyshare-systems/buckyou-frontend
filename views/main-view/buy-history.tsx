import ArrowUpRight from "@/components/icon/arrow-up-right";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const history = [
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
  {
    username: "0x4193...abcd",
    amount: "143",
    time: "2 days 4 hrs ago",
    link: "#",
  },
];

export function BuyHistory() {
  return (
    <Table className="overflow-auto">
      <TableHeader className="p-1">
        <TableRow className="text-white-50 ty-descriptions">
          <TableHead>Username</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Time</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {history.map((data, index) => (
          <TableRow key={index} className="group cursor-pointer">
            <TableCell className="font-medium group-hover:text-yellow-100 ease-out duration-300">
              {data.username}
            </TableCell>
            <TableCell className="font-medium group-hover:text-yellow-100 ease-out duration-300">
              {data.amount}
            </TableCell>
            <TableCell className="font-medium group-hover:text-yellow-100 ease-out duration-300">
              {data.time}
            </TableCell>
            <TableCell className="text-right opacity-50 group-hover:opacity-100 ease-out duration-300">
              <a href={data.link}>
                <ArrowUpRight />
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
