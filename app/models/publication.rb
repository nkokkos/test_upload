class Publication < ApplicationRecord

 # active_storage definitions
  has_many_attached :my_files, dependent: :destroy
  before_destroy    :delete_all_attachments

  def delete_all_attachments
     ActiveRecord::Base.transaction do
       self.my_files.each do |my_file|
         if !my_file.blob.nil?
            file = ActiveStorage::Blob.find_signed(my_file.signed_id)
            if !file.nil?
              file.purge_later
            end
          end
        end
      end
  end


end
