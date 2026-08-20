"use client";

import { useState } from "react";
import { Search, Heart, ShoppingBag, Sparkles, X, Upload, UserRound, Check, SlidersHorizontal, Shirt } from "lucide-react";

const products = [
  { brand:"H&M", name:"Relaxed Fit Overshirt", price:"₹1,799", old:"₹2,999", badge:"Best Match", image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85", reasons:["Matches your preferred fit","Looks great on your body type","Black is your top color"] },
  { brand:"Zudio", name:"Textured Polo T-shirt", price:"₹999", old:"₹1,499", badge:"Great for you", image:"https://images.unsplash.com/photo-1506629905607-d405b7a30db9?auto=format&fit=crop&w=700&q=85", reasons:["Perfect for your body shape","Beige suits your skin tone","You liked similar styles"] },
  { brand:"Roadster", name:"Hooded Sweatshirt", price:"₹1,499", old:"₹2,499", badge:"New for you", image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85", reasons:["Matches your casual style","Great for your height","Popular with similar users"] },
  { brand:"The Bear House", name:"Linen Blend Shirt", price:"₹1,899", old:"₹2,699", badge:"Top Pick", image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=85", reasons:["Light colors suit you","Perfect for your body type","Trending in your area"] }
];

export default function Home() {
  const [selected, setSelected] = useState(products[0]);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);
  const tryOn = (product: typeof products[number]) => { setSelected(product); setOpen(true); setGenerated(false); };
  return <main>
    <header className="topbar"><div className="logo">Style<span>Mates</span></div><div className="search"><Search size={19}/><input placeholder="Tell us what you're looking for..."/></div><Heart size={22}/><div className="bag"><ShoppingBag size={22}/><b>2</b></div><div className="avatar">S</div><span className="username">Shibin⌄</span></header>
    <nav><a className="active">For You</a><a>Men</a><a>Women</a><a>Shoes</a><a>Accessories</a><a>Premium</a><a>New Arrivals</a><a className="sale">Sale</a></nav>
    <section className="content"><div className="page-head"><div><h1>Picked for you, Shibin <Sparkles/></h1><p>Based on your style, body profile, preferred fit, colors and previous interests.</p></div><button className="outline"><Shirt size={18}/> Update my style profile</button></div>
      <div className="filters"><div><small>Style</small><strong>Casual⌄</strong></div><div><small>Fit</small><strong>Regular⌄</strong></div><div><small>Colors</small><strong>● Black, Beige⌄</strong></div><div><small>Body Fit</small><strong>Personalized <Check size={16}/></strong></div><div className="filter-end"><SlidersHorizontal size={18}/> Filters</div></div>
      <div className="recommend"><span><Sparkles size={16}/> AI Recommendations</span><p>100+ products picked just for you</p><a>Learn more ⓘ</a></div>
      <div className="grid">{products.map((p,i)=><article className="card" key={p.name}><div className="photo"><img src={p.image} alt={p.name}/><em>{p.badge}</em><button className="heart"><Heart size={21}/></button><button className="magic" onClick={()=>tryOn(p)}><Sparkles size={20}/></button></div><div className="details"><small>{p.brand}</small><h3>{p.name}</h3><div className="price">{p.price} <del>{p.old}</del> <span>{i===3?"37":"40"}% OFF</span></div><p className="rating">★ {i===1?"4.4":"4.6"}</p><h4>Why recommended for you</h4>{p.reasons.map(r=><p className="reason" key={r}><Check size={15}/>{r}</p>)}<div className="actions"><button className="try" onClick={()=>tryOn(p)}><Sparkles size={18}/> Try it on</button><button className="cart"><ShoppingBag size={20}/></button></div></div></article>)}</div></section>
    {open && <aside className="panel"><div className="panel-head"><div><h2><Sparkles/> Virtual Try-On</h2><p>See how it looks on you</p></div><button onClick={()=>setOpen(false)}><X/></button></div><div className="step"><b>1</b><div><h3>Selected product</h3><div className="selected"><img src={selected.image}/><p>{selected.brand}<br/><strong>{selected.name}</strong><br/><b>{selected.price}</b><br/><small>Color: Black | Size: M</small></p></div></div></div><div className="step"><b>2</b><div className="wide"><h3>Your photo</h3><p>Upload a full-body front photo</p><label className="upload">{photo?<img src={photo}/>:<><Upload size={32}/><strong>Upload a full-body photo</strong><small>Front-facing photos work best</small></>}<input type="file" accept="image/*" onChange={e=>{const f=e.target.files?.[0];if(f)setPhoto(URL.createObjectURL(f))}}/></label><button className="saved"><UserRound size={18}/> Use my saved photo</button></div></div><div className="step"><b>3</b><div className="wide"><h3>See yourself wearing it</h3><p>AI will generate your try-on image</p><button className="generate" disabled={!photo} onClick={()=>setGenerated(true)}><Sparkles/> See myself wearing this</button></div></div>{generated&&<div className="results"><div className="result-head"><h3>Try-on results</h3><span>AI generated</span></div><div className="compare"><div><label>Original</label><img src={photo!}/></div><div><label>Wearing it</label><img src={selected.image}/></div></div><div className="bottom-actions"><button>♡ Save Look</button><button>↻ Try Another</button><button className="add"><ShoppingBag size={18}/> Add to Bag</button></div></div>}</aside>}
  </main>;
}
