import React from 'react';

export default function Menu({title, items}) {
  return (
    <section>
      <h6 className="text-lg text-primary-brand-color">{title}</h6>
      <nav className="grid gap-y-4 mt-3">
        <ul className="grid gap-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <a className="text-sm hover:text-brand-color">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
