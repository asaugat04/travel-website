import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CallbackForm from "./CallbackForm";

function ContactDialog({ className, displayName, place }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant="outline">
          {displayName}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] rounded sm:max-w-[425px] bg-white border-0 backdrop-blur-3xl">
        <DialogHeader>
          <DialogTitle className="text-yellow-600">{displayName}</DialogTitle>
          <DialogDescription as="div">
            {place && place.images && place.starting_price && (
              <p className="flex flex-row gap-2">
                {/* {place.images && ( */}
                <img
                  className="rounded-md w-16 h-16"
                  src={place?.images[0]}
                  alt={`image of${place?.name}`}
                />
                {/* )} */}
                <p className="text-left text-xs font-normal text-black">
                  {place?.name}
                  <p className="text-left text-xs text-black py-2">
                    {place.currency + " " + place.starting_price}
                    <span className="line-through text-gray-500 inline-block pl-2">
                      {place.currency + " " + place.strike_through_price}
                    </span>
                  </p>
                </p>
              </p>
            )}
          </DialogDescription>
        </DialogHeader>
        <CallbackForm buttonName={displayName} />
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
