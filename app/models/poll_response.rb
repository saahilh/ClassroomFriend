class PollResponse < ApplicationRecord
  belongs_to :student
  belongs_to :option
end
