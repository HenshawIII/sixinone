import { EntertainmentSubnav } from "../components/entertainment/entertainment-subnav";

export default function EntertainmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EntertainmentSubnav />
      {children}
    </>
  );
}
