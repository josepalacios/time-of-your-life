import { render, screen, within } from "@testing-library/react"
import Clock from "./Clock";

it("should render timer title text", () => {
    const clockProps = {
        fontFamily:'courier',
        availableFontSizes: [12, 24, 48, 64],
        titleFontSize: 64,
        clockFontSize:48,
        blinkColons: true,
        fontColor: 'black',
        textTitle:'The Time of Your Life'
    }

    
    render(<Clock clockProps={clockProps} />);

    var textTitle = screen.getByTestId("title");

    expect(textTitle).toBeInTheDocument();
  });