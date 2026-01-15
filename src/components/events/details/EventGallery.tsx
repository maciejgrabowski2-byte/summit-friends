import * as React from "react";
import { Plus } from "lucide-react";

export function EventGallery() {
  return (
    <section className="flex flex-wrap gap-2.5 w-full max-w-[400px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/38c2f89386c7b2cf2e727688d2e13e81efa9fe0a?width=718"
        alt="Main event gallery image"
        className="object-cover rounded-md w-full h-[280px] sm:h-[380px]"
      />
      <div className="flex gap-2 w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/948fae9b1ad364f32738749fd08afa8bf43c16e4?width=512"
          alt="Event gallery image"
          className="object-cover rounded-md flex-1 h-[160px] sm:h-[210px]"
        />
        <div className="flex flex-col gap-2 w-24">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e7a6aaa22ebcb3937278f33af9f033f6bf6f3af1?width=192"
            alt="Small gallery image"
            className="object-cover w-full rounded-md h-[75px] sm:h-[100px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f88787220ec172819b63917474a033749136c065?width=192"
            alt="Small gallery image"
            className="object-cover w-full rounded-md h-[75px] sm:h-[100px]"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9ee01f844b4347aff76bf655bfd0b6614c4ee0c8?width=304"
          alt="Event gallery image"
          className="object-cover rounded-md h-[100px] sm:h-[120px] w-[140px] sm:w-[152px]"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/59e79527a797d46919ef85ecc31ff05e9648eaf5?width=192"
          alt="Event gallery image"
          className="object-cover rounded-md h-[100px] sm:h-[120px] w-20 sm:w-24"
        />
      </div>
      <button className="flex items-center gap-1 text-base text-primary hover:underline">
        <Plus className="w-4 h-4" />
        Add route photos
      </button>
    </section>
  );
}

export default EventGallery;
