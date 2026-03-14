export type UiLanguage = "en" | "zh-TW" | "zh-CN";
export type UiTheme = "auto" | "light" | "dark";

export function normalizeLanguage(input?: string | null): UiLanguage {
  const v = (input ?? "").toLowerCase().trim();

  if (v === "zh-tw" || v === "zhtw" || v === "traditional") return "zh-TW";
  if (v === "zh-cn" || v === "zhcn" || v === "simplified") return "zh-CN";

  if (v === "zh") return "zh-CN";

  return "en";
}

export function normalizeTheme(input?: string | null): UiTheme {
  const v = (input ?? "").toLowerCase().trim();

  if (v === "light") return "light";
  if (v === "dark") return "dark";

  return "auto";
}

export function t(
  lang: UiLanguage,
  en: string,
  tw: string,
  cn: string,
): string {
  if (lang === "zh-TW") return tw;
  if (lang === "zh-CN") return cn;
  return en;
}
