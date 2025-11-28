import React, { useState, useEffect } from 'react';

const DocumentationApp = () => {
  const [activeTab, setActiveTab] = useState('topology');
  const [expandedSections, setExpandedSections] = useState({});

  const studentConfig = {
    studentId: '29049',
    fullName: 'Muheto Hodal',
    domain: '29049.f25'
  };

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const tabs = [
    { id: 'topology', label: 'Topology', icon: '🌐' },
    { id: 'pfsense', label: 'pfSense', icon: '🔥' },
    { id: 'ad-gpo', label: 'AD & GPO', icon: '🖥️' },
    { id: 'linux', label: 'Linux Server', icon: '🐧' },
    { id: 'wazuh', label: 'Wazuh', icon: '🛡️' },
    { id: 'ids', label: 'IDS', icon: '🔍' },
    { id: 'kali', label: 'Kali Tests', icon: '💀' },
    { id: 'vpn', label: 'VPN', icon: '🔐' },
    { id: 'ntopng', label: 'NTOPng', icon: '📊' },
    { id: 'backups', label: 'Backups', icon: '💾' },
  ];

  const ipData = [
    { no: 1, role: 'Windows Server (AD + DNS)', hostname: `AD-${studentConfig.studentId}`, segment: 'LAN1', ip: '192.168.1.2/29' },
    { no: 2, role: 'Linux Server (DHCP + Apache)', hostname: `LS-${studentConfig.studentId}`, segment: 'LAN1', ip: '192.168.1.3/29' },
    { no: 3, role: 'Wazuh Server (SIEM)', hostname: `WS-${studentConfig.studentId}`, segment: 'LAN1', ip: '192.168.1.4/29' },
    { no: 4, role: 'Windows Client 1', hostname: `PC1-${studentConfig.studentId}`, segment: 'LAN2', ip: 'DHCP' },
    { no: 5, role: 'Windows Client 2', hostname: `PC2-${studentConfig.studentId}`, segment: 'LAN2', ip: 'DHCP' },
    { no: 6, role: 'pfSense Firewall', hostname: `PF-${studentConfig.studentId}`, segment: 'All', ip: 'LAN1: .1.1, LAN2: .2.1' },
    { no: 7, role: 'Kali Linux', hostname: `Kali-${studentConfig.studentId}`, segment: 'NAT', ip: 'DHCP' },
  ];

  const Section = ({ id, title, step, children }) => (
    <div className="border border-emerald-500/20 rounded-lg mb-3 overflow-hidden">
      <button onClick={() => toggleSection(id)} className="w-full flex justify-between items-center p-4 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
        <div className="flex items-center gap-3">
          {step && <span className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs font-bold">Step {step}</span>}
          <h3 className="text-white font-medium">{title}</h3>
        </div>
        <span className="text-emerald-400 text-xl">{expandedSections[id] ? '−' : '+'}</span>
      </button>
      {expandedSections[id] && <div className="p-4 bg-slate-900/50">{children}</div>}
    </div>
  );

  const EvidenceCard = ({ title, timestamp, description, command }) => (
    <div className="bg-slate-800/50 rounded-lg p-4 mb-3 border border-slate-700">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-emerald-400 font-medium">{title}</h4>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <div className="bg-slate-950 rounded-lg p-3 border border-dashed border-slate-600 text-center mb-3">
        <span className="text-2xl mb-2 block">🖼️</span>
        <span className="text-gray-500 text-sm">Upload screenshot here</span>
      </div>
      {command && (
        <div className="bg-slate-950 rounded-lg overflow-hidden">
          <div className="px-3 py-2 bg-slate-800 text-xs text-gray-400 flex items-center gap-2">
            <span className="text-emerald-400">$</span> Command
          </div>
          <pre className="p-3 text-sm text-emerald-300 overflow-x-auto">{command}</pre>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-200">
      {/* Header */}
      <header className="bg-slate-950/80 border-b border-emerald-500/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📚</span> IT Infrastructure Documentation
            </h1>
            <p className="text-gray-500 text-sm">Enterprise Network Lab - {studentConfig.domain}</p>
          </div>
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <span className="text-xs text-gray-400 block">Student ID</span>
            <span className="text-emerald-400 font-bold">{studentConfig.studentId}</span>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-slate-900/50 border-b border-white/5 px-4 py-2 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-gray-400 hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Topology Tab */}
        {activeTab === 'topology' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Network Topology & IP Allocation</h2>
              <p className="text-gray-400">Complete network architecture for the enterprise lab environment.</p>
            </div>

            {/* Network Diagram Placeholder */}
            <div className="bg-slate-800/50 rounded-xl p-8 border-2 border-dashed border-emerald-500/30 text-center">
              <span className="text-5xl mb-4 block">🗺️</span>
              <h3 className="text-xl font-semibold text-white mb-2">Network Topology Diagram</h3>
              <p className="text-gray-500 mb-4">Upload your topology diagram here</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 bg-blue-500/20 rounded-lg">
                  <span className="text-xs text-gray-400">LAN1</span>
                  <span className="block text-blue-400 font-mono">192.168.1.0/29</span>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 rounded-lg">
                  <span className="text-xs text-gray-400">LAN2</span>
                  <span className="block text-purple-400 font-mono">192.168.2.0/29</span>
                </div>
                <div className="px-4 py-2 bg-orange-500/20 rounded-lg">
                  <span className="text-xs text-gray-400">WAN</span>
                  <span className="block text-orange-400 font-mono">NAT (DHCP)</span>
                </div>
              </div>
            </div>

            {/* IP Allocation Table */}
            <div className="bg-slate-800/30 rounded-xl overflow-hidden border border-white/5">
              <div className="px-4 py-3 bg-slate-800/50 border-b border-white/5">
                <h3 className="font-semibold text-white">IP Address Allocation Table</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800/30">
                    <tr>
                      {['No.', 'VM Role', 'Hostname', 'Segment', 'IP Address'].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-emerald-400 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ipData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-800/20' : ''}>
                        <td className="px-4 py-3 text-gray-400">{row.no}</td>
                        <td className="px-4 py-3 text-white">{row.role}</td>
                        <td className="px-4 py-3 text-emerald-400 font-mono">{row.hostname}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.segment === 'LAN1' ? 'bg-blue-500/20 text-blue-400' :
                            row.segment === 'LAN2' ? 'bg-purple-500/20 text-purple-400' :
                            row.segment === 'NAT' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>{row.segment}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-300 font-mono">{row.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* pfSense Tab */}
        {activeTab === 'pfsense' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">pfSense Firewall Configuration</h2>
              <p className="text-gray-400">Complete firewall setup including interfaces, NAT, DHCP, and firewall rules.</p>
            </div>
            
            <Section id="pf-1" title="Interface Configuration" step="1">
              <EvidenceCard 
                title="Interfaces Assignment"
                timestamp="YYYY-MM-DD HH:MM"
                description="Configure WAN, OPT1 (LAN1), and OPT2 (LAN2) interfaces."
                command={`WAN: DHCP (VirtualBox NAT)\nOPT1 (LAN1): 192.168.1.1/29\nOPT2 (LAN2): 192.168.2.1/29`}
              />
            </Section>

            <Section id="pf-2" title="DHCP Configuration (LAN2 Only)" step="2">
              <EvidenceCard 
                title="DHCP Server for LAN2"
                timestamp="YYYY-MM-DD HH:MM"
                description="Configure DHCP on OPT2 (LAN2). LAN1 uses Linux DHCP."
                command={`Pool Range: 192.168.2.2 - 192.168.2.6\nDNS: 192.168.1.2 (AD Server)\nDomain: ${studentConfig.domain}`}
              />
            </Section>

            <Section id="pf-3" title="Firewall Rules" step="3">
              <div className="bg-slate-800/30 rounded-lg overflow-hidden mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-emerald-400">Rule Name</th>
                      <th className="px-4 py-2 text-left text-emerald-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-700">
                      <td className="px-4 py-2 text-emerald-300 font-mono">ALLOW_{studentConfig.studentId}_LAN1_TO_LAN2</td>
                      <td className="px-4 py-2 text-green-400">Pass</td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-800/20">
                      <td className="px-4 py-2 text-emerald-300 font-mono">ALLOW_{studentConfig.studentId}_ALL_TO_WEBPAGES</td>
                      <td className="px-4 py-2 text-green-400">Pass</td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="px-4 py-2 text-emerald-300 font-mono">KaliPentest_{studentConfig.studentId}</td>
                      <td className="px-4 py-2 text-yellow-400">Pass (Scheduled)</td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-800/20">
                      <td className="px-4 py-2 text-emerald-300 font-mono">LAN2_NoSocial_{studentConfig.studentId}</td>
                      <td className="px-4 py-2 text-red-400">Block (Scheduled)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </div>
        )}

        {/* AD & GPO Tab */}
        {activeTab === 'ad-gpo' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="YYYY-MM-DD HH:MM"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="YYYY-MM-DD HH:MM"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
              />
            </Section>

            <Section id="ad-3" title="Group Policy Objects" step="3">
              <div className="space-y-2 mb-4">
                {[
                  { name: `GPO_${studentConfig.studentId}_Roaming`, desc: 'Roaming profile paths' },
                  { name: `GPO_${studentConfig.studentId}_MappedDrives`, desc: 'Map network drives' },
                  { name: `GPO_${studentConfig.studentId}_SoftwareDeploy`, desc: 'Deploy VLC.msi, Mozilla.msi' },
                  { name: `GPO_${studentConfig.studentId}_PasswordPolicy`, desc: 'Min 12 chars, lockout after 3 fails' },
                ].map((gpo, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                    <span className="text-emerald-400 font-mono text-sm">{gpo.name}</span>
                    <span className="text-gray-400 text-sm">{gpo.desc}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* Other tabs show placeholder */}
        {!['topology', 'pfsense', 'ad-gpo'].includes(activeTab) && (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">{tabs.find(t => t.id === activeTab)?.icon}</span>
            <h2 className="text-2xl font-bold text-white mb-2">{tabs.find(t => t.id === activeTab)?.label} Documentation</h2>
            <p className="text-gray-400 mb-6">Click on sections to expand and add your evidence.</p>
            <div className="max-w-2xl mx-auto text-left">
              <Section id={`${activeTab}-1`} title="Configuration Steps" step="1">
                <EvidenceCard 
                  title="Initial Setup"
                  timestamp="YYYY-MM-DD HH:MM"
                  description="Document your configuration steps with screenshots and commands."
                />
              </Section>
              <Section id={`${activeTab}-2`} title="Verification & Testing" step="2">
                <EvidenceCard 
                  title="Test Results"
                  timestamp="YYYY-MM-DD HH:MM"
                  description="Add evidence of successful configuration and testing."
                />
              </Section>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/5 bg-slate-950/50">
        <p className="text-gray-500">IT Infrastructure Documentation | {studentConfig.fullName} | ID: {studentConfig.studentId}</p>
      </footer>
    </div>
  );
};

export default DocumentationApp;