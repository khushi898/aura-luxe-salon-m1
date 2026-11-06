const root=document.documentElement;
const saved=localStorage.getItem("theme");
const systemDark=window.matchMedia("(prefers-color-scheme:dark)").matches;

if(saved==="dark" || (!saved && systemDark)){
    root.classList.add("dark");
}
document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.getElementById("theme-toggle");
    btn.setAttribute("aria-pressed",root.classList.contains("dark"));
    btn.addEventListener("click",()=>{
        root.classList.toggle("dark");
        const isDark=root.classList.contains("dark");
        localStorage.setItem("theme",isDark?"dark":"light");
        btn.setAttribute("aria-pressed",isDark);
    });
})