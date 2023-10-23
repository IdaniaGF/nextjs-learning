import Counter from "./Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      <Counter />
      <marquee style={{ background: "#fff", color: "purple" }}>
        Este es el mejor canal de Twitch de programacion: Qmidudev
      </marquee>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
