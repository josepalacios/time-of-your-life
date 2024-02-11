// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';

// it('renders without crashing', async () => {
//   const div = document.createElement('div');
//   const root = createRoot(div);
//   root.render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>);
//   await new Promise(resolve => setTimeout(resolve, 1000));
// });
import { render, screen, within } from "@testing-library/react"
import Clock from "./components/Clock";

it("should render timer title text", () => {
    render(<Clock />)

    var textTitle = screen.getByTestId("title");

    expect(textTitle).toBeInTheDocument();
  });