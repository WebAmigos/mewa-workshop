import { renderHook, act } from '@testing-library/react';

import { useAuth } from './AuthContext';

describe('useAuth hook', () => {
  it('should toggle values', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isLoggedIn).toEqual(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isLoggedIn).toEqual(true);
  });
});
