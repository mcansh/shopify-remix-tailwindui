export function getRedirectTo(
  searchParamsOrFormData: URLSearchParams | FormData,
  fallback = "/",
  returnToKey = "returnTo"
) {
  // 1. Get the redirect URL from formData or URLSearchParams
  let redirect = searchParamsOrFormData.get(returnToKey);
  // 2. If the redirect URL is not a string, use the fallback
  if (typeof redirect !== "string") {
    redirect = fallback;
  }
  // 3. trim whitespace
  redirect = redirect.trim();
  // 4. if the redirect URL is protocol-less or starts with http, use the fallback
  if (redirect.startsWith("//") || redirect.startsWith("http")) {
    redirect = fallback;
  }
  // 5. return the redirect URL
  return redirect || fallback;
}
