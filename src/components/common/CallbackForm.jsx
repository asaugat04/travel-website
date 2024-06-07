import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function CallbackForm({ buttonName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phone_code: "+977",
  });
  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="font-normal text-center text-xs">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Full Name"
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="font-normal text-center">
            Email
          </Label>
          <Input
            id="email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email adderss"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone" className="font-normal text-center">
            Phone
          </Label>
          <div className="col-span-3 grid grid-cols-10 items-center gap-2">
            <Input
              id="phone-code"
              value={formData?.phone_code}
              onChange={(e) =>
                setFormData({ ...formData, phone_code: e.target.value })
              }
              className="col-span-3"
            />
            <Input
              id="phone"
              placeholder="9xxxxxxxxx"
              type="number"
              value={formData?.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="col-span-7"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="date" className="font-normal text-center">
            Travel Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                placeholder="Date"
                className={`col-span-3 text-xs text-left ${
                  !formData?.date && "text-gray-400 hover:text-gray-400"
                }`}
              >
                {!formData?.date && "Select Date"}
                {formData?.date && new Date(formData?.date).toDateString()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-50 p-0 " side="bottom">
              <Calendar
                mode="single"
                selected={formData?.date}
                onSelect={(selectedDate) => {
                  setFormData({ ...formData, date: selectedDate });
                }}
                className="bg-slate-100 rounded "
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="traveller_count" className="font-normal text-center">
            Traveller count
          </Label>
          <Input
            id="traveller_count"
            value={formData?.traveller_count}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, traveller_count: e.target.value })
            }
            placeholder="No of travellers"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="message" className="font-normal text-center">
            Message
          </Label>
          <Input
            id="message"
            value={formData?.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Message here"
            className="col-span-3"
          />
        </div>
      </div>
      <Button className="bg-yellow-600 w-full" type="submit">
        {buttonName}
      </Button>
    </div>
  );
}

export default CallbackForm;
