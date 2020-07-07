node.reverse_merge!(
  ssh: {
    port: [9922,22],
  },
)
node[:op_user_name] = 'neonlight'
node[:orgname] = 'isux'
node[:site_domain] = 'x.isucon.dev'
node[:site_rdomain] = '14.10.in-addr.arpa'
node[:site_cidr] = '10.14.128.0/17'
node[:site_admin_domain] = "x.isucon.dev"
# node[:site_cidr6] = ''

node[:use_nftables] = true

#node[:wlc_host] = "wlc-001.venue.l.#{node.fetch(:site_domain)}"
# node[:prometheus_host] =
node[:grafana_host] = node[:prometheus_host]
#node[:syslog_host] = "syslog-001.cloud.l.#{node.fetch(:site_domain)}"

#node[:snmp_community] = 'public'

node[:extra_disk] = "/dev/nvme0n1"

node[:rproxy_htpasswd] = node[:secrets][:rproxy_htpasswd]
node[:default_authorized_keys] = [
  *"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDy2KlTqzyz5U1YnzejU8wPDXm8BxqvZMDgYCBj0TIqEmo2GLk0DusdG7zFaaR1asqSrya3U9sTK2Ki8+1EMunqn4ZHSSYnIemvJ71nzpJkwkp08wHo0T+4/Px5LFdKtsTh4BVuwqLke51HXN6tRPfoftAiR3qGj6C0BDyKztA+cRMb32Db4DrQmt01O8ISijUE+Txlr16zDCnJt8nakzhNMzCALz9q5UepFay4vhWyGWbo2DYLr7EpPonOuKT8jxFk6VxLlraMFqgVsNEgT/kJtFDshqeNiwGR1kVHBx8e+0gdWBOAKci1qJe015axsU9MFQvprMMBIve/pSTQ+DGWsXvjGYCAJVT/XBuGjUd3L3TwAQWYyGePokELPC+SX4c2RlCMj7A8tJpCdNrjG/GvWhPWtqdQj9ab0gc9rHcQbk5gPN/y/VCFswgiAWXcS8zh/9D3S+I5dRgoAMIn3G+WCY1OG8J8FYoz19bbp7PCV0I6aJZgSJ9LjBQH64aqnyo7xCQrYcQ/O9x8hERFere0EQbkSg7b9uiCktBZ3w3CRhbrgp1bRQv4BC7mZSIh/V3EL6HgjjlET5Kuk7SLD5cjuoTKM3E+NcYwAs2EiIE4VjbagLCEAVxYlHCHH7wHENDnSgVLjhzsiXm0BZ01+8Ma06mUszH6IqbZhCjXvYJJcw== isucon10",
  # sorah
  *"
    ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1MjEAAACFBADLFfXAbYvLbd3gTH08FfYEADFWVaa2xoHC4pzMNy+MoPbf9qPWTLGYlkXPL7QxgZH6dRk458rkfwEIySxajdIr0AEGcrvVTezzhYNvZReISWMBlO68cDprusADqLqoLus2booss4LIKmm6BI4vuuXtOOVhAdltj0gf/CVlpNuZ99szFw== americano2016ecdsa
    ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1MjEAAACFBACG1cKNR8SS4Dkm2wcia74RRmy9d7h62114MQd0H9zb1+1LxVa55Qqd8O232BH1i/fF/1o+eE3L5U7RCR8KUCuAXgFrF429BETaiiBnSErv5yrHJS5RTTjEhA1d9Ygk0o3Und6+90waBXAk2oPVP+OBNtYq1CraZQsXuqvlUtMrBnSTsQ== sorah-mulberry-ecdsa
    ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1MjEAAACFBAHoLUkgSzQfIXMx7nS9TzgFubVwYBiaWYPh2Ges30IMytU8oQyrQ4V/mPjvWHrij9pz0Uz+tbhR1+Tza85LzyFiCwDrZDQNqLGB7b/bwhy9cGQPVGUdiObJ4f2MEPYzyueEtmCQuh1NiPl/p8HSIyEBOmc19duWfKyvDRvayg8hJAs4mg== sorah-wD-my-ecdsa
  ".lines.map(&:strip).reject(&:empty?),
]

host_lines = <<EOF
EOF

node[:hosts_data] = host_lines.lines.
  map { |l| dc, network, cidr, ip, name, iface, mac = l.chomp.split(?\t, 7);{dc: dc, network: network, cidr: cidr, ip: ip, name: name, mac: (mac && !mac.empty? && mac != '#N/A') ? mac : nil, iface: (iface && !iface.empty?) ? iface : nil} }.
  reject { |_| _[:ip].nil? || _[:ip].empty? }.
  group_by { |_| [_[:dc], _[:name]] }.
  map { |_, ips| [ips[0].merge(primary: true), ips[1..-1]].flatten }.
  flatten

node[:network_tester] ||= [
  {host: '8.8.8.8'},
  {host: '1.1.1.1'},
]

node.reverse_merge!(
  prometheus: {
    alertmanager: {
      # slack_url: 
    },
    snmp_hosts: [
    ],
  },
)
