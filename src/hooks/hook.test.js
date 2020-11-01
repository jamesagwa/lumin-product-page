import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import { requestFlow, useHasMounted } from ".";

describe("custom hooks tests", () => {
  it("should return true if component has mounted using the useHasMounted hook", () => {
    const { result } = renderHook(() => useHasMounted());

    expect(result.current).toBe(true);
  });

  it("should update the request flow indexes on increment", () => {
    const { useRequestFlow, RequestProvider } = requestFlow;
    const wrapper = ({ children }) => (
      <RequestProvider>{children}</RequestProvider>
    );
    const { result } = renderHook(() => useRequestFlow(), { wrapper });

    expect(result.current.state.activeFlow).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.state.activeFlow).toBe(1);
  });
});