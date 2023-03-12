<script setup>
import ContainerComponent from '../components/ContainerComponent.vue';
import FormSection from '../components/FormSection.vue';
import ShortText from '../components/ShortText.vue';
import LongText from '../components/LongText.vue';
import FlexCol from '../components/FlexCol.vue';
import FlexRow from '../components/FlexRow.vue';
import AddButton from '../components/AddButton.vue';
import {useCvStore} from '../stores/cv';
import RemoveButton from './RemoveButton.vue';
import PhotoPicker from '../components/PhotoPicker.vue';
import {TransitionRoot} from '@headlessui/vue'

const cvStore = useCvStore()
</script>

<template>
  <TransitionRoot
    :show="cvStore.editMode"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <ContainerComponent class="divide-gray-200 divide-y space-y-6">
      <FlexCol>
        <FlexRow>
          <FormSection
            title="Profile"
            description="Basic personal information."
          />
        </FlexRow>
        <FlexRow>
          <ShortText
            v-model="cvStore.profile.name"
            class="w-full"
            label="Name"
          />
        </FlexRow>
        <FlexRow>
          <PhotoPicker
            v-model="cvStore.profile.preview"
            :initial="cvStore.profile.photo"
            class="w-full"
            label="Photo"
          />
        </FlexRow>
        <FlexRow>
          <ShortText
            v-model="cvStore.profile.address"
            class="w-full"
            label="Address"
          />
        </FlexRow>
        <FlexRow>
          <ShortText
            v-model="cvStore.profile.phone"
            class="w-full"
            label="Phone"
          />
        </FlexRow>
        <FlexRow>
          <ShortText
            v-model="cvStore.profile.email"
            class="w-full"
            label="E-mail"
          />
        </FlexRow>
      </FlexCol>
      <FlexCol class="pt-6">
        <FlexRow>
          <FormSection
            title="Work Experiences"
          />
        </FlexRow>
        <FlexCol>
          <FlexCol
            v-for="(item, i) in cvStore.workExperiences"
            :key="i"
            class="ml-6"
          >
            <div
              v-if="i>0"
              class="w-full h-0"
            />
            <FlexRow>
              <div class="font-semibold text-sm text-gray-500">
                Work Experience #{{ i+1 }}
              </div>
              <RemoveButton @click="cvStore.workExperiences.splice(i, 1)" />
            </FlexRow>
            <FlexCol class="ml-6 border-l-4 border-gray-200 pl-3">
              <FlexRow>
                <ShortText
                  v-model="item.name"
                  class="w-full font-bold"
                  label="Position"
                />
              </FlexRow>
              <FlexRow>
                <ShortText
                  v-model="item.company"
                  class="w-1/2 font-bold"
                  label="Company"
                />
                <ShortText
                  v-model="item.employmentType"
                  class="w-1/2"
                  label="Employment Type"
                />
              </FlexRow>
              <FlexRow>
                <ShortText
                  v-model="item.from"
                  class="w-1/3"
                  label="From"
                />
                <ShortText
                  v-model="item.to"
                  class="w-1/3"
                  label="To"
                />
                <ShortText
                  v-model="item.duration"
                  class="w-1/3"
                  label="Duration"
                />
              </FlexRow>
              <FlexRow
                v-for="(_, j) in item.details"
                :key="j"
              >
                <LongText
                  v-model="item.details[j]"
                  class="w-full"
                  :label="'Job Description #'+(j+1)"
                >
                  <template #extra>
                    <RemoveButton @click="item.details.splice(j, 1)" />
                  </template>
                </LongText>
              </FlexRow>
              <FlexRow>
                <AddButton @click="item.details.push('')">
                  Job Description
                </AddButton>
              </FlexRow>
            </FlexCol>
          </FlexCol>
          <FlexRow>
            <AddButton
              @click="cvStore.workExperiences.push({
                name: '',
                company: '',
                employmentType: '',
                from: '',
                to: '',
                duration: '',
                details: [],
              })"
            >
              Work Experience
            </AddButton>
          </FlexRow>
        </FlexCol>
      </FlexCol>
      <FlexCol class="pt-6">
        <FlexRow>
          <FormSection
            title="Sections"
          />
        </FlexRow>
        <FlexCol
          v-for="(section, j) in cvStore.sections"
          :key="j"
        >
          <div
            v-if="j>0"
            class="w-full h-0"
          />
          <FlexRow>
            <ShortText
              v-model="section.name"
              class="w-full font-extrabold"
              :label="'Section #'+(j+1)"
            >
              <template #extra>
                <RemoveButton
                  class="ml-3"
                  @click="cvStore.sections.splice(j, 1)"
                />
              </template>
            </ShortText>
          </FlexRow>
          <FlexCol class="ml-6">
            <FlexCol
              v-for="(sectionItem, k) in section.data"
              :key="k"
            >
              <div
                v-if="k>0"
                class="w-full h-0"
              />
              <FlexRow class="font-extrabold text-sm text-gray-500">
                {{ section.name }} #{{ k+1 }}
                <RemoveButton
                  class="ml-3"
                  @click="section.data.splice(k, 1)"
                />
              </FlexRow>
              <FlexCol class="ml-6 border-l-8 border-gray-200 pl-3">
                <FlexRow>
                  <ShortText
                    v-model="sectionItem.from"
                    class="w-1/6"
                    label="From"
                  />
                  <ShortText
                    v-model="sectionItem.to"
                    class="w-1/6"
                    label="To"
                  />
                  <ShortText
                    v-model="sectionItem.name"
                    class="w-2/6 font-bold"
                    label="Name"
                  />
                  <ShortText
                    v-model="sectionItem.description"
                    class="w-2/6 font-bold"
                    label="Description"
                  />
                </FlexRow>
                <FlexRow
                  v-for="(_, l) in sectionItem.details"
                  :key="l"
                >
                  <LongText
                    v-model="sectionItem.details[l]"
                    class="w-full"
                    :label="'Description #'+(l+1)"
                  >
                    <template #extra>
                      <RemoveButton
                        @click="sectionItem.details.splice(l, 1)"
                      />
                    </template>
                  </LongText>
                </FlexRow>
                <FlexRow v-if="sectionItem.details !== undefined">
                  <AddButton @click="sectionItem.details.push('')">
                    Description
                  </AddButton>
                </FlexRow>
              </FlexCol>
            </FlexCol>
            <FlexRow>
              <AddButton
                @click="cvStore.addSectionItem(section)"
              >
                {{ section.name }}
              </AddButton>
            </FlexRow>
          </FlexCol>
        </FlexCol>
        <FlexRow>
          <AddButton
            @click="cvStore.sections.push({name: '[section name]',data: [{
              from: '',
              to: '',
              name: '',
              description: '',
              details: [],
            }]})"
          >
            Section
          </AddButton>
        </FlexRow>
      </FlexCol>
    </ContainerComponent>
  </TransitionRoot>
</template>
