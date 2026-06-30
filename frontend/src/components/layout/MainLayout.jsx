import Navbar from "./Navbar";

function MainLayout({ children }){
    return (
        <div>
            <Navbar />

            <main>
                {children}
{/* children ka matlab hota hai:
Is component ke andar jo bhi content pass hoga, wo children ban jayega. 
Home, Login koi bhi page pass kr skte hai*/}
            </main>
        </div>
    );
}


export default MainLayout;