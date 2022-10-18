import React from "react"
import {screen, render} from "@testing-library/react"

import {AAWidget} from "./AAWidget";

describe("AAWidget", () => {
    it("should render the component", () => {
        render(<AAWidget contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
