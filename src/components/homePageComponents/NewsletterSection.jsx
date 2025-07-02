import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="px-4 md:px-10 lg:px-36 py-16 bg-base-100 text-base-content">
            <div className="max-w-full mx-auto text-center bg-base-200 rounded-xl p-20 shadow-xl">
                <h2 className="text-4xl md:text-4xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6 text-lg">
                    Stay informed about upcoming events, new initiatives, and ways you can make an impact in your community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full sm:w-96"
                    />
                    <button className="btn btn-primary">Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
