import { permanentRedirect } from "next/navigation";

export default function HistoryRedirect({ searchParams }: { searchParams: { lang?: string | string[] } }) {
  permanentRedirect(searchParams.lang === "ko" ? "/ko/about/why-hwarang#history" : "/about/why-hwarang#history");
}
