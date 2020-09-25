include_role 'base'

package 'qemu-headless'
package 'make'
package 'packer'
package 'ruby'
package 'rubygems'
package 'jq'
package 'jsonnet'
package 'aws-cli'

gem_package 'aws-sdk-s3'
gem_package 'aws-sdk-ec2'

user "octo" do
  create_home true
end

execute 'usermod -a -G kvm octo' do
  not_if 'id octo | grep -q kvm'
end
