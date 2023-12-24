export function registerOnClick(dotnetRef,myButton) {
    // register click event
    debugger;
    myButton.addEventListener('click', () => { dotnetRef.invokeMethodAsync("Clicked") })
}