import React from "react";

const SingleBlogPage = () => {
  const blog = {
    title: "Understanding JavaScript Closures",
    content: `
      <p>JavaScript closures are a fundamental concept in the language, allowing functions to retain access to their lexical scope even when executed outside that scope.</p>
      <p>This is particularly useful for creating private variables and encapsulating functionality.</p>
      <br />
      <h3 class="font-semibold text-lg">Here's a simple example to illustrate closures:</h3>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
        <code>
          function makeCounter() {
            let count = 0;
            return function() {
              count++;
              return count;
            };
          }
          const counter = makeCounter();
          console.log(counter()); // 1
          console.log(counter()); // 2
        </code>
      </pre>
      <p>In the example above, the inner function retains access to the <code>"count"</code> variable even after <code>"makeCounter"</code> has executed.</p>

      <h3 class="font-semibold text-lg">Why Use Closures?</h3>
      <p>Closures are particularly useful for several reasons:</p>
      <ul class="list-disc ml-5">
        <li><strong>Data Privacy:</strong> They can create private variables that cannot be accessed from outside the function. This is a common pattern for module design.</li>
        <li><strong>Partial Application:</strong> They allow you to create functions with pre-set arguments, making them versatile and reusable.</li>
        <li><strong>Callbacks and Asynchronous Programming:</strong> Closures are often used in callbacks, allowing access to the outer function's scope, which is critical for maintaining state in asynchronous operations.</li>
      </ul>

      <h3 class="font-semibold text-lg">A More Complex Example</h3>
      <p>Consider a more complex scenario where closures can be beneficial:</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
        <code>
          function createButtonCounter() {
            let count = 0;
            const button = document.createElement("button");
            button.innerText = "Clicked 0 times";
            button.onclick = function() {
              count++;
              button.innerText = \`Clicked \${count} times\`;
            };
            document.body.appendChild(button);
          }

          createButtonCounter();
        </code>
      </pre>
      <p>In this example, each time the button is clicked, the closure retains the count state, allowing it to increment correctly without using global variables.</p>

      <h3 class="font-semibold text-lg">Common Pitfalls</h3>
      <p>While closures are powerful, they can lead to some common pitfalls:</p>
      <ul class="list-disc ml-5">
        <li><strong>Memory Leaks:</strong> Unintentionally retaining references to outer variables can prevent them from being garbage collected.</li>
        <li><strong>Overusing Closures:</strong> They can make the code more complex and harder to understand if used excessively or inappropriately.</li>
      </ul>

      <h3 class="font-semibold text-lg">Conclusion</h3>
      <p>Understanding closures is essential for mastering JavaScript. They provide powerful capabilities for managing state, encapsulating logic, and enhancing code readability. Mastering closures will greatly improve your coding skills and allow you to leverage JavaScript's capabilities more effectively.</p>
    `,
    date: "October 1, 2024",
    author: "John Doe",
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          {blog.title}
        </h1>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>{blog.date}</span>
          <span>{blog.author}</span>
        </div>
        <div className="prose lg:prose-xl text-gray-700 dark:text-gray-300 mb-8">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
