import { TooltipArrow, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Arrow, Content, TooltipContainer } from "./styles";
import { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode
  isAvailable: boolean
}

export function Tooltip({isAvailable, children}: TooltipProps) {
  return(
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <Content>
          <Arrow />
          {isAvailable ? "Data disponível" : "Data Indisponível"}
        </Content>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'