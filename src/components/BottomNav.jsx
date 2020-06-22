import React from "react";
import Button from "@material-ui/core/Button";

export default function BottomNav() {
  return (
    <div className="navbottom">
      <Button>
        <a href="/home">
          <svg
            viewBox="0 0 24 24"
            width="36"
            height="36"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
      </Button>

      <Button>
        <a href="/youtube">
          <svg
            viewBox="0 0 24 24"
            width="36"
            height="36"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
      </Button>
      <Button>
        <a href="/twitch">
          <svg
            viewBox="0 0 24 24"
            width="36"
            height="36"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
          </svg>
        </a>
      </Button>
      <Button>
        <a href="/github">
          <svg
            viewBox="0 0 24 24"
            width="36"
            height="36"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </Button>
    </div>
  );
}
