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

  const EvidenceCard = ({ title, timestamp, description, command, img }) => (
    <div className="bg-slate-800/50 rounded-lg p-4 mb-3 border border-slate-700">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-emerald-400 font-medium">{title}</h4>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <div className="bg-slate-950 rounded-lg p-3 border border-dashed border-slate-600 text-center mb-3">
        <span className="text-2xl mb-2 block">🖼️</span>
        <span className="text-gray-500 text-sm"><img src={img} alt={description} /></span>
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
              <img className='my-4' src="https://res.cloudinary.com/andela-hodal/image/upload/v1764368883/it_infranstracture/kkiyizvrwtnzb0bjzzz6.jpg" alt="" />
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

            <Section id="pf-1" title="Main Dashboard" step="1">
              <EvidenceCard 
                title="Main Dashboard"
                timestamp="07-12-2025 00:32"
                description="All Basic Description Dashboard of pfsense"
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765052963/it_infranstracture/pfsense/tv0rbvyj4zlkimconvci.png"}
              />
            </Section>
            
            <Section id="pf-2" title="Interface Configuration" step="2">
              <EvidenceCard 
                title="Interfaces Assignment"
                timestamp="07-12-2025 00:32"
                description="Configure WAN, OPT1 (LAN1), and OPT2 (LAN2) interfaces."
                command={`WAN: DHCP (VirtualBox NAT)\nOPT1 (LAN1): 192.168.1.1/29\nOPT2 (LAN2): 192.168.2.1/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765052996/it_infranstracture/pfsense/mn40pdvagig9arucavcn.png"}
              />
            </Section>

            <Section id="pf-3" title="DHCP Configuration (LAN2 Only)" step="3">
              <EvidenceCard 
                title="DHCP Server for LAN2"
                timestamp="07-12-2025 00:32"
                description="Configure DHCP on OPT2 (LAN2). LAN1 uses Linux DHCP."
                command={`Pool Range: 192.168.2.2 - 192.168.2.6\nDNS: 192.168.1.2 (AD Server)\nDomain: ${studentConfig.domain}`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053137/it_infranstracture/pfsense/akufcnj7zdmpxnyyw4bp.png"}
              />
            </Section>

            <Section id="pf-4" title="Firewall Rules" step="4">
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
              <Section id="pf-4.1" title="Allow LAN1 TO COMMUNICATE WITH LAN2" step="4.1">
              <EvidenceCard 
                title="ALLOW_29049_LAN1_TO_LAN2"
                timestamp="07-12-2025 00:32"
                description="Here we have allowed LAN1 to communicate with LAN2."
                command={`Pool Range: 192.168.2.2 - 192.168.2.6\nDNS: 192.168.1.2 (AD Server)\nDomain: ${studentConfig.domain}`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053090/it_infranstracture/pfsense/cgfn6l614fhlsh7tfynf.png"}
                />
            </Section>
            <Section id="pf-4.2" title="Allow LAN2 TO COMMUNICATE WITH LAN1" step="4.2">
              <EvidenceCard 
                title="ALLOW_29049_LAN2_TO_LAN1"
                timestamp="07-12-2025 00:32"
                description="Here we have allowed LAN1 to communicate with LAN2."
                command={`Pool Range: 192.168.2.2 - 192.168.2.6\nDNS: 192.168.1.2 (AD Server)\nDomain: ${studentConfig.domain}`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053106/it_infranstracture/pfsense/rplynbocjrlfj3klqhvo.png"}
                />
            </Section>
            <Section id="pf-4.3" title="SCHEDULES FOR KaliPentest_29049" step="4.3">
              <EvidenceCard 
                title="Allow Penetration Testing specified Timeline"
                timestamp="07-12-2025 00:32"
                description="We have allowed KaliPentest to access from between 7 december to 22 at 10:00 to 11:00"
                command={`Between : 7 Dec - 22 Dec \n From : 10:00 - 11:00`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053106/it_infranstracture/pfsense/rplynbocjrlfj3klqhvo.png"}
                />
            </Section>

            <Section id="pf-4.4" title="USING ALIASES TO Block Social Media" step="4.4">
              <EvidenceCard 
                title="We can block Social media through different Schedule"
                timestamp="07-12-2025 00:32"
                description="We have used Aliases to block Social Medias from between 7 december to 22 at 09:00 to 12:00 as a work Hours and from 13:00 to 17:00"
                command={`Between : 7 Dec - 22 Dec \n From : 09:00 - 12:00 \n and 13:00 - 17:00 as work Hours`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053042/it_infranstracture/pfsense/cgk3uugkrmeuw6iyyxay.png"}
                />
            </Section>
            <Section id="4.5" title="CONFIGURE NAT" step="4.5">
              <EvidenceCard 
                title="WE have Configured Outbound"
                timestamp="07-12-2025 00:32"
                description="To Allow Internet Communication we have enable NAT to allow all Network we have"
                command={`NAT LAN 1 INTERNET: 192.168.1.0/29 \n NAT LAN 2 INTERNET : 192.168.2.0/29 `}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765053059/it_infranstracture/pfsense/rruijahiof1kixj3wjru.png"}
                />
            </Section>
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
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}

        {activeTab === 'linux' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Configure Linux</h2>
              <p className="text-gray-400">Install Linux and Connect to Server</p>
            </div>
            
            <Section id="ad-1" title="Configure Linux" step="1">
              <EvidenceCard 
                title="Linux Successfully Installed"
                timestamp="07-12-2025 00:32"
                description="We have Successfully installed Linux!"
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064693/it_infranstracture/Linux_Server/ywd5hbdi3xbmqnalgs69.png"}
              />
            </Section>

            <Section id="ad-2" title="Add Linux to Server" step="2">
              <EvidenceCard 
                title="Add Linux to Server"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064718/it_infranstracture/Linux_Server/xlxo7gakmmasxrx4zud0.png"}
              />
            </Section>

              <Section id="ad-3" title="Testing Linux to be connected to pfsense" step="3">
              <EvidenceCard 
                title="Testing Linux"
                timestamp="07-12-2025 00:32"
                description="Testing Linux to be connected to pfsense"
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064730/it_infranstracture/Linux_Server/hgtggmwfmvhk6mglwjgc.png"}
              />
            </Section>
          </div>
        )}

         {activeTab === 'wazuh' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}

        
         {activeTab === 'ids' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}


        
         {activeTab === 'kali' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}


        
         {activeTab === 'ntopng' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}

         {activeTab === 'backups' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Active Directory & Group Policy</h2>
              <p className="text-gray-400">Windows Server domain controller, OUs, users, and GPO configuration.</p>
            </div>
            
            <Section id="ad-1" title="Domain Controller Installation" step="1">
              <EvidenceCard 
                title="AD DS Installation"
                timestamp="07-12-2025 00:32"
                description="Install Active Directory Domain Services and promote to Domain Controller."
                command={`Domain: ${studentConfig.domain}\nHostname: AD-${studentConfig.studentId}\nIP: 192.168.1.2/29`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064592/it_infranstracture/AD_GPO/o9gwbr1poklyq9lvi2cq.png"}
              />
            </Section>

            <Section id="ad-2" title="Organizational Units & Users" step="2">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="Create OUs: IT, HR, Students, Finance with sample users."
                command={`OUs Created:\n├── IT (IT1, IT2)\n├── HR (HR1)\n├── Students (Student1)\n└── Finance (Fin1)`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064603/it_infranstracture/AD_GPO/nwojkrwxjkqqkduosqo4.png"}
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
              <Section id="ad-4" title="Organizational Units & Users" step="4">
              <EvidenceCard 
                title="OU Structure"
                timestamp="07-12-2025 00:32"
                description="We have created GPOs"
                command={`OUs Created:\n GPO_29049_Roaming \n GPO_29049_MappedDrives\n GPO_29049_SoftwareDeploy \n GPO_29049_PasswordPolicy`}
                img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064637/it_infranstracture/AD_GPO/ou75oqmdtakfqtnmmec0.png"}
              />
            </Section>
            </Section>
          </div>
        )}


        {/* Other tabs show placeholder */}
        {!['topology', 'pfsense', 'ad-gpo','linux','wazuh','ids','kali','vpn','ntopng','backups'].includes(activeTab) && (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">{tabs.find(t => t.id === activeTab)?.icon}</span>
            <h2 className="text-2xl font-bold text-white mb-2">{tabs.find(t => t.id === activeTab)?.label} Documentation</h2>
            <p className="text-gray-400 mb-6">Click on sections to expand and add your evidence.</p>
            <div className="max-w-2xl mx-auto text-left">
              <Section id={`${activeTab}-1`} title="Configuration Steps" step="1">
                <EvidenceCard 
                  title="Initial Setup"
                  timestamp="07-12-2025 00:32"
                  description="Document your configuration steps with screenshots and commands."
                  img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064693/it_infranstracture/Linux_Server/ywd5hbdi3xbmqnalgs69.png"}
                />
              </Section>
              <Section id={`${activeTab}-2`} title="Server Setting" step="2">
                <EvidenceCard 
                  title="Server Setting"
                  timestamp="07-12-2025 00:32"
                  description="We have Configured our Server Configuration Settup!"
                  img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064718/it_infranstracture/Linux_Server/xlxo7gakmmasxrx4zud0.png"}

                />
              </Section>
               <Section id={`${activeTab}-3`} title="Verification & Testing" step="3">
                <EvidenceCard 
                  title="Test Results"
                  timestamp="07-12-2025 00:32"
                  description="Add evidence of successful configuration and testing."
                  img={"https://res.cloudinary.com/andela-hodal/image/upload/v1765064730/it_infranstracture/Linux_Server/hgtggmwfmvhk6mglwjgc.png"}

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