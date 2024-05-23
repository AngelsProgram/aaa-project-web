import zod from "zod";
import c from "./colors.json" assert { type: "json" };

type TColor = {
  name: string;
  rgb: string;
  hex: string;
};

const colors: TColor[] = c;
const array_colors_name = colors.map((color) => color.name);
const array_colors_unknown = array_colors_name as unknown;
const enum_colors = array_colors_unknown as readonly [string, ...string[]];

const schema_colors_name = zod.z.enum(enum_colors);

const schema_rgb = zod.z
  .string()
  .startsWith("rgb")
  .regex(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)
  .refine((value) => {
    const matches = value.match(/\d+/g);
    if (matches?.length !== 3) return;
    const tested = matches.every((number) => {
      try {
        const bytevalue = parseInt(number);
        return bytevalue < 256;
      } catch (error) {
        return false;
      }
    });
    return tested;
  });

const schema_hex = zod.z
  .string()
  .startsWith("#")
  .regex(/#([0-9A-F]{3}|[0-9A-F]{6})/)
  .toUpperCase();

const schema_color = zod.z.union([schema_colors_name, schema_rgb, schema_hex]);

export { schema_colors_name, schema_color };
