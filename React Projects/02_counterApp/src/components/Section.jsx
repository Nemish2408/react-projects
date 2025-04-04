import { LevelContext } from "./LevelContext.jsx";

export default function Section({ children, level }) {
    return (
      <section className="section">
        <LevelContext.Provider value={level}> 
            {children}
        </LevelContext.Provider>    
      </section>
    );
}
