import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

interface CreateEventStep3Props {
  selectedDate?: Date;
  selectedTime?: string;
  onContinue: (date: Date, time: string) => void;
}

// Generate time options in 30-minute intervals
const generateTimeOptions = () => {
  const options: string[] = [];
  for (let hour = 5; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      options.push(time);
    }
  }
  return options;
};

const timeOptions = generateTimeOptions();

export function CreateEventStep3({ selectedDate, selectedTime, onContinue }: CreateEventStep3Props) {
  const { t } = useTranslation();
  const [date, setDate] = React.useState<Date | undefined>(selectedDate);
  const [time, setTime] = React.useState<string>(selectedTime || "08:00");

  const canContinue = date && time;

  const handleContinue = () => {
    if (date && time) {
      onContinue(date, time);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          {t('createEvent.step3.title')}
        </h1>
        <p className="text-muted-foreground">
          {t('createEvent.step3.subtitle')}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Calendar */}
        <div className="border border-border rounded-xl p-4 bg-card">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            className={cn("p-3 pointer-events-auto")}
          />
        </div>

        {/* Time picker */}
        <div className="w-full max-w-xs space-y-2">
          <Label htmlFor="time-select">{t('createEvent.step3.timeLabel')}</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger id="time-select" className="w-full">
              <SelectValue placeholder={t('createEvent.step3.timePlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((timeOption) => (
                <SelectItem key={timeOption} value={timeOption}>
                  {timeOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Selected date/time summary */}
        {date && (
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {t('createEvent.step3.selectedDateTime')}
            </p>
            <p className="text-lg font-semibold text-foreground">
              {format(date, "EEEE, MMMM d, yyyy")} {t('createEvent.step3.at')} {time}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={handleContinue} 
          size="lg"
          disabled={!canContinue}
        >
          {t('createEvent.step3.createEvent')}
        </Button>
      </div>
    </div>
  );
}

export default CreateEventStep3;
