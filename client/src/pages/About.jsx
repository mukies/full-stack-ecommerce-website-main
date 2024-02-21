/** @format */
import Layout from "../component/layout/Layout.jsx";
export default function About() {
    return (
        <Layout>
            <div
                className='px-3 md:h-[60vh] h-[90vh] flex md:flex-row
                md:gap-x-10 mt-10
                mb-30 justify-center items-center
            flex-col gap-y-8  md:px-10'
            >
                <div className='md:w-1/2 w-full'>
                    <img
                        src='https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg'
                        alt='about us'
                    />
                </div>
                <div className='md:w-1/2 w-full'>
                    <span className='text-2xl border-b-gray-700 mb-10 border-b-2'>
                        About Us.
                    </span>
                    <p className=' md:mt-4 mt-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae quam nihil culpa suscipit commodi iste
                        molestias non soluta deserunt. Quam earum odio commodi
                        harum tempora officiis, eveniet voluptatem consequatur,
                        laborum architecto, illum, enim non totam labore
                        dolorum. Fugiat exercitationem, ad incidunt sapiente
                        natus ratione magni, eveniet asperiores. Nihil,
                        inventore, quaerat.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
