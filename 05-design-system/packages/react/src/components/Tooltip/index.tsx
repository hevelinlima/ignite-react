import { TooltipArrow, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Content, Root, TooltipContainer } from "./styles";
import { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode
  isAvailable: boolean
}

export function Tooltip({isAvailable, children}: TooltipProps) {
  return(
    <TooltipContainer>
      <Root>
        <TooltipTrigger>{children}</TooltipTrigger>
        <Content>
          <TooltipArrow />
          {isAvailable ? "Data disponível" : "Data Indisponível"}
        </Content>
      </Root>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'