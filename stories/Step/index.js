import "./step.css";
import { createButton } from "../Button";

export const createStep = ({ steps }) => {
  const step = document.createElement("div");
  const ul = document.createElement("ul");
  const btnBox = document.createElement("div");

  ul.className = "step-wrapper";
  btnBox.className = "step-btnBox";
  step.className = "step";

  // * 스텝
  const list = `<li class="step-progress"></li>${steps
    .map((step) => `<li step-circle>${step}</li>`)
    .join("")}`;

  ul.innerHTML = list;

  // * 버튼
  const prev = createButton({ label: "Prev" });
  const next = createButton({ label: "Next" });

  btnBox.appendChild(prev);
  btnBox.appendChild(next);

  step.appendChild(ul);
  step.appendChild(btnBox);

  return step;
};
