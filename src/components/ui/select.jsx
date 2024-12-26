import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const SimpleSelect = () => (
  <SelectPrimitive.Root>
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 px-3 py-2 text-sm focus:outline-none"
      )}
    >
      <SelectPrimitive.Value placeholder="Select an option" />
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="bg-white rounded-md shadow-lg">
        <SelectPrimitive.Viewport>
          <SelectPrimitive.Item value="option1" className="p-2">
            <SelectPrimitive.ItemText>Option 1</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="option2" className="p-2">
            <SelectPrimitive.ItemText>Option 2</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
              <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);
