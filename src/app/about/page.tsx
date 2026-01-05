import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              关于 <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AIBox</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AIBox 是一个致力于让AI技术普惠化的创新平台，我们相信人工智能的力量能够改变世界，
              让每个人都能轻松享受到智能化的服务。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-violet-600 rounded-full" />
                我们的使命
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                让AI触手可及，让智能无处不在
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AIBox 的使命是打破人工智能的技术壁垒，将最先进的AI技术以最简单、最友好的方式呈现给每一位用户。
                我们不仅仅是技术的提供者，更是智能时代的推动者。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过持续的技术创新和产品优化，我们致力于为个人用户、企业客户和开发者提供全方位的AI解决方案，
                让AI真正成为提升生产力和创造力的强大工具。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">普惠化</h3>
                      <p className="text-gray-600">让每个人都能轻松使用AI技术</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">高性能</h3>
                      <p className="text-gray-600">提供业界领先的AI推理速度</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">用户至上</h3>
                      <p className="text-gray-600">以用户需求为中心持续创新</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              技术架构
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              业界领先的AI技术栈
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AIBox 采用最前沿的AI技术和架构，为您提供稳定、高效的服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">大语言模型</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                基于Transformer架构，拥有千亿级参数，能够理解复杂的语义和上下文关系。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">GPT-4</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Claude</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">DeepSeek</span>
              </div>
            </div>

            {/* Tech Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">向量数据库</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                高性能的向量存储和检索系统，支持大规模语义搜索和知识库管理。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Pinecone</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Milvus</span>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">FAISS</span>
              </div>
            </div>

            {/* Tech Card 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">微服务架构</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                云原生的微服务架构，支持弹性扩容、高并发访问，确保服务稳定可靠。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">gRPC</span>
              </div>
            </div>

            {/* Tech Card 4 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">安全加密</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                采用端到端加密技术，数据传输和存储全程加密，保障用户隐私安全。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AES-256</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">TLS 1.3</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">GDPR</span>
              </div>
            </div>

            {/* Tech Card 5 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">实时推理</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                优化的推理引擎，支持流式输出，响应速度快至毫秒级，提供流畅体验。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">TensorRT</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">ONNX</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">SSE</span>
              </div>
            </div>

            {/* Tech Card 6 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">开放生态</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                提供完善的API和SDK，支持开发者快速集成，构建丰富的AI应用生态。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">REST API</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">WebSocket</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              应用场景
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              广泛的应用场景
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AIBox 可以应用于各个领域，为您的工作和生活带来智能化升级
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">智能客服</h3>
                  <p className="text-gray-600 leading-relaxed">
                    24小时在线的智能客服系统，自动回答用户咨询，提升客户满意度，降低人工成本。
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">内容创作</h3>
                  <p className="text-gray-600 leading-relaxed">
                    辅助写作、翻译、总结，激发创作灵感，提高内容生产效率和质量。
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">数据分析</h3>
                  <p className="text-gray-600 leading-relaxed">
                    智能数据分析和洞察生成，从海量数据中快速提取有价值的信息和趋势。
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">企业办公</h3>
                  <p className="text-gray-600 leading-relaxed">
                    智能文档处理、会议纪要、邮件分类，提升企业办公效率和协作体验。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-violet-600 rounded-full" />
              发展历程
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              我们的发展历程
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-600 rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-sm text-violet-600 font-semibold mb-2">2021年</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">项目启动</h3>
                    <p className="text-gray-600">AIBox 项目正式立项，开始研发核心AI引擎</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white shadow-lg" />
                <div className="w-1/2 pl-12" />
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg" />
                <div className="w-1/2 pl-12">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-sm text-purple-600 font-semibold mb-2">2022年</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Beta版本发布</h3>
                    <p className="text-gray-600">发布AIBox 1.0 Beta版，首批用户开始测试</p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-sm text-pink-600 font-semibold mb-2">2023年</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">正式上线</h3>
                    <p className="text-gray-600">AIBox 2.0 正式发布，用户突破百万大关</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg" />
                <div className="w-1/2 pl-12" />
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white shadow-lg" />
                <div className="w-1/2 pl-12">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-sm text-violet-600 font-semibold mb-2">2024年</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">全球化扩张</h3>
                    <p className="text-gray-600">AIBox 3.0 发布，支持多语言，服务全球用户</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            加入AIBox，共创未来
          </h2>
          <p className="text-xl text-violet-100 mb-10 leading-relaxed">
            我们正在寻找志同道合的伙伴，一起推动AI技术的发展和应用
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            联系我们
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold">AIBox</span>
            </div>
            <div className="text-sm">
              © 2024 AIBox. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
