export async function generateMetadata(){
    // SEO Data Fetch
    return{
        title:"Team"
    }
}

const Layout = ({ children }) => {
    return (
        <div>
            { children }    
        </div>
    );
};

export default Layout;