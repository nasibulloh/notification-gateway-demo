const t="[a-z0-9_]+(?:-[a-z0-9_]+)*",T=new RegExp(`^${t}(?:\\.${t}){2}$`),n=E=>E.trim().toLowerCase(),o=E=>{const e=n(E);return e.length<=100&&T.test(e)};export{o as i,n};
