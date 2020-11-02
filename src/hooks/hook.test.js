import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import { useAppContext } from ".";
import { AppProvider, initialState } from '../config'

describe("custom hooks tests", () => {
  let render_result

  beforeEach(() => {
    const wrapper = ({ children }) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(() => useAppContext(), { wrapper });
    render_result = result
  })

  it("should have the initialized state on start", () => {
    expect(render_result.current.state).toEqual(initialState);
  });

  it("should update state when setState is called", () => {
    const mockState = { mock: 'test'}

    act(() => {
      render_result.current.setState(mockState);
    });

    expect(render_result.current.state).toEqual(mockState)
  })

  it("should call showCart method and update state", () => {
    act(() => {
      render_result.current.showCart();
    });

    expect(render_result.current.state.showCart).toBe(true)
  })
});