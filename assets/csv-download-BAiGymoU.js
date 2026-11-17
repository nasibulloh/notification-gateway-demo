const r=n=>{const e=n==null?"":String(n),t=/^[=+\-@]/.test(e)&&Number.isNaN(Number(e))?`'${e}`:e;return/[",\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t},c=(n,e)=>`\uFEFF${[n,...e].map(t=>t.map(r).join(",")).join(`\r
`)}\r
`,s=(n,e)=>{const t=URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=e,o.rel="noopener",document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)};export{s,c as t};
