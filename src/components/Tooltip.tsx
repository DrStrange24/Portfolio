import { ReactNode } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const TooltipWrapper = ({
  tooltip,
  placement = "top",
  children,
}: {
  tooltip: string;
  placement?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip>{tooltip}</Tooltip>}
    >
      <div>{children}</div>
    </OverlayTrigger>
  );
};
