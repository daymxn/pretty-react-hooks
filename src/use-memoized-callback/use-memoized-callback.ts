import { useCallback, useMutable } from "@rbxts/roact-hooked";

/**
 * Returns a memoized callback. When passed a new callback, the memoized
 * callback will not change, but calling it will invoke the new callback.
 * @param callback The callback to memoize.
 * @returns The memoized callback.
 */
export function useMemoizedCallback<T extends Callback>(callback: T): T {
	const callbackRef = useMutable(callback);
	callbackRef.current = callback;

	return useCallback((...args: unknown[]) => {
		return callbackRef.current(...args);
	}, []) as T;
}
