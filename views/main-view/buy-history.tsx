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
          <TableRow key={index}>
            <TableCell className="font-medium">{data.username}</TableCell>
            <TableCell>{data.amount}</TableCell>
            <TableCell>{data.time}</TableCell>
            <TableCell className="text-right">
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
