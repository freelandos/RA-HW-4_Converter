import { useState } from "react";

export function Converter() {
  const [color, setColor] = useState<string>("input");

  function hexToRGB(hex_value: string) {
    const hex = parseInt(hex_value.slice(1), 16);
    const r = (hex >> 16) & 255;
    const g = (hex >> 8) & 255;
    const b = hex & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const colorPattern = /^#[a-fA-F0-9]{6}$/;
    if (e.target.value.length >= 7) {
      if (colorPattern.test(e.target.value)) {
        setColor(() => e.target.value);
      } else {
        setColor(() => "error");
      }
      return;
    }

    setColor(() => "input");
  }

  return (
    <div className="converter" style={{ backgroundColor: color }}>
      <input
        type="text"
        className="input_color"
        placeholder="input color"
        onChange={handleChanges}>
      </input>
      <div className="chosen_color">
        {
          color === "input"
            ? "Введите цвет"
            : color === "error"
            ? "Ошибка!"
            : hexToRGB(color)
        }
      </div>
    </div>
  );
}
