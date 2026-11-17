import { permanentRedirect } from "next/navigation";

export default function KoreanHistoryRedirect() {
  permanentRedirect("/ko/about/why-hwarang#history");
}
