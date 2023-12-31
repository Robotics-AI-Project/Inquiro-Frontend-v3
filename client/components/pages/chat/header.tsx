"use client";

import { cn } from "@/client/libs/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@client/components/ui/select";
import {
  llmOptionsList,
  sqlGeneratorOptionsList,
} from "@client/constants/options";
import { useOptionStore } from "@client/stores/option.store";
import { MessagesSquare } from "lucide-react";

const Header = () => {
  const { llm, setLLM, setSQLGenerator, sqlGenerator } = useOptionStore();
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-0 flex w-full items-center justify-between bg-transparent px-6 py-4",
        // gradual backdrop from sm to md upwards
        "bg-gradient-to-t from-transparent via-white/80 to-white backdrop-blur-[1px]",
      )}
    >
      <div className="flex items-center space-x-2">
        <MessagesSquare className="h-6 w-6" />
        <h1 className="text-xl font-semibold">Top 10 Movies in 2020</h1>
      </div>
      <div className="flex space-x-4">
        <Select value={llm} onValueChange={setLLM}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="LLM" />
          </SelectTrigger>
          <SelectContent>
            {llmOptionsList.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center space-x-2">
                  {option.icon}
                  <p>{option.label}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sqlGenerator} onValueChange={setSQLGenerator}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sqlGeneratorOptionsList.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center space-x-2">
                  <p>{option.label}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Header;
