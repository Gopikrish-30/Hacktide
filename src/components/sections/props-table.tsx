import React from 'react';

const propsData = [
  { name: 'className', type: 'string', default: '-' },
  { name: 'gap', type: 'number', default: '20' },
  { name: 'radius', type: 'number', default: '100' },
  { name: 'color', type: 'string', default: '#3b82f6' },
  { name: 'darkColor', type: 'string', default: '#1d4ed8' },
  { name: 'glowColor', type: 'string', default: '#60a5fa' },
  { name: 'darkGlowColor', type: 'string', default: '#2563eb' },
  { name: 'colorLightVar', type: 'string', default: '--blue-500' },
  { name: 'colorDarkVar', type: 'string', default: '--blue-700' },
  { name: 'glowColorLightVar', type: 'string', default: '--blue-400' },
  { name: 'glowColorDarkVar', type: 'string', default: '--blue-600' },
  { name: 'opacity', type: 'number', default: '0.3' },
  { name: 'backgroundOpacity', type: 'number', default: '0.1' },
  { name: 'speedMin', type: 'number', default: '1' },
  { name: 'speedMax', type: 'number', default: '3' },
  { name: 'speedScale', type: 'number', default: '1' },
];

export default function PropsTable() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-black mb-8">Props</h2>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#737373] mb-6">
            DottedGlowBackground Props
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="py-4 pr-4 text-sm font-semibold text-black">Prop</th>
                <th className="py-4 px-4 text-sm font-semibold text-black">Type</th>
                <th className="py-4 pl-4 text-sm font-semibold text-black text-right">Default</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((prop, index) => (
                <tr 
                  key={prop.name} 
                  className={`border-b border-[#e5e7eb]/50 hover:bg-neutral-50/50 transition-colors ${
                    index === propsData.length - 1 ? 'border-none' : ''
                  }`}
                >
                  <td className="py-4 pr-4">
                    <code className="text-xs font-mono font-medium text-black bg-[#f5f5f5] px-1.5 py-0.5 rounded-md">
                      {prop.name}
                    </code>
                  </td>
                  <td className="py-4 px-4">
                    <code className="text-xs font-mono text-[#737373] bg-[#f5f5f5] px-1.5 py-0.5 rounded-md">
                      {prop.type}
                    </code>
                  </td>
                  <td className="py-4 pl-4 text-right">
                    <code className="text-xs font-mono text-[#737373] bg-[#f5f5f5] px-1.5 py-0.5 rounded-md">
                      {prop.default}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        tbody tr {
          animation: fadeIn 0.4s ease forwards;
          opacity: 0;
        }
        ${propsData.map((_, i) => `tbody tr:nth-child(${i + 1}) { animation-delay: ${i * 0.05}s; }`).join('\n')}
      `}</style>
    </section>
  );
}