import React from "react";
import "./HumburgerButton.scss";

export default function HumburgerButton({ showModal, toggleModal }) {
  return (
    <button onClick={toggleModal}>
      {showModal ? (
        <svg viewBox="0 0 325.438 325.438">
          <g>
            <g>
              <path d="m325.438 31.182-131.537 131.537 131.537 131.537-31.182 31.182-131.537-131.537-131.537 131.537-31.182-31.182 131.537-131.537-131.537-131.537 31.182-31.182 131.537 131.537 131.537-131.537z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 384 384">
          <g>
            <g>
              <g>
                <rect x="0" y="277.333" width="384" height="42.667" />
                <rect x="0" y="170.667" width="384" height="42.667" />
                <rect x="0" y="64" width="384" height="42.667" />
              </g>
            </g>
          </g>
        </svg>
      )}
    </button>
  );
}
