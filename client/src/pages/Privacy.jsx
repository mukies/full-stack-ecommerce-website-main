/** @format */
import Layout from "../component/layout/Layout.jsx";
export default function Privacy() {
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
                        src='https://blog.ipleaders.in/wp-content/uploads/2020/10/bluestar_webbox_privacy-policy_1024x512_1218_V1_PRESS.jpg'
                        alt='privacy policy'
                    />
                </div>
                <div className='md:w-1/2 mt-10 w-full'>
                    <span className='text-2xl border-b-gray-700 mb-10 border-b-2'>
                        Privacy Policy.
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
